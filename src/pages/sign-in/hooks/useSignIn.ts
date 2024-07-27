import {selectAccount} from '@/apis/account'
import {useForm, zodResolver} from '@mantine/form'
import {notifications} from '@mantine/notifications'
import {useMutation} from '@tanstack/react-query'
import {z} from 'zod'
import bcrypt from 'bcryptjs'
import {useNavigate} from 'react-router-dom'
import {PUBLIC_ROUTES} from '@/configs'

const schema = z.object({
  email: z
    .string({
      required_error: 'Please enter email!',
    })
    .email('Invalid email format!'),
  password: z.string({
    required_error: 'Please enter password!',
  }),
})

type FormType = z.infer<typeof schema>

export function useSignIn() {
  const form = useForm<FormType>({
    validate: zodResolver(schema),
    mode: 'uncontrolled',
  })

  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['sign-in'],
    mutationFn: selectAccount,
  })

  const navigate = useNavigate()

  const onSubmit = form.onSubmit(async (formData) => {
    const {data, error} = await mutateAsync(formData.email)
    if (error) {
      return notifications.show({
        title: 'Error',
        message: 'Something went wrong, Please try again later!',
        color: 'red',
        id: 'sign-in',
      })
    }
    if (!data || data.length === 0) {
      return notifications.show({
        title: 'Error',
        message: 'Bad Credentials!',
        color: 'red',
        id: 'sign-in',
      })
    }
    const savedData = data[0]
    if (savedData && bcrypt) {
      const isSamePassword = bcrypt.compareSync(
        formData.password,
        savedData.password,
      )
      if (isSamePassword) {
        notifications.show({
          title: 'Success',
          message: 'Successfully signed in!',
          color: 'green',
          id: 'sign-in',
        })
        navigate(PUBLIC_ROUTES.HOME)
      } else {
        notifications.show({
          title: 'Error',
          message: 'Bad Credentials!',
          color: 'red',
          id: 'sign-in',
        })
      }
    }
  })

  return {form, isPending, onSubmit}
}
