import {createAccount} from '@/apis/account'
import {useForm, zodResolver} from '@mantine/form'
import {useMutation} from '@tanstack/react-query'
import {z} from 'zod'
import bcrypt from 'bcryptjs'
import {notifications} from '@mantine/notifications'
import {useNavigate} from 'react-router-dom'
import {AUTH_ROUTES} from '@/configs'

const schema = z.object({
  username: z
    .string({
      required_error: 'Please enter username!',
    })
    .min(3, 'Must be at least 3 characters!')
    .max(20, 'Must not over than 20 characters!'),
  email: z
    .string({
      required_error: 'Please enter email!',
    })
    .email('Invalid email format!')
    .max(30, 'Must not over than 30 characters!'),
  password: z
    .string({
      required_error: 'Please enter password!',
    })
    .min(6, 'Must be at least 6 characters!')
    .max(20, 'Must not over than 20 characters!'),
})

type SignUpForm = z.infer<typeof schema>

export function useSignUp() {
  const form = useForm<SignUpForm>({
    validate: zodResolver(schema),
    mode: 'uncontrolled',
  })
  const {mutateAsync, isPending, error} = useMutation({
    mutationKey: ['sign-up'],
    mutationFn: createAccount,
  })
  const navigate = useNavigate()

  const onSubmit = form.onSubmit(async (formData) => {
    if (isPending) {
      return
    }
    const {error} = await mutateAsync({
      ...formData,
      password: bcrypt.hashSync(formData.password),
    })
    if (error) {
      if (error.code === '23505') {
        return notifications.show({
          title: 'Error',
          message: 'The email has already been used by other account!',
          color: 'red',
          id: 'sign-up',
        })
      }
      return notifications.show({
        title: 'Error',
        message: 'Something went wrong!',
        color: 'red',
        id: 'sign-up',
      })
    } else {
      notifications.show({
        title: 'Success',
        message: 'Successfully created!',
        color: 'green',
        id: 'sign-up',
      })
      navigate(AUTH_ROUTES.SIGN_IN)
    }
  })

  return {form, isPending, error, onSubmit}
}
