import {useForm, zodResolver} from '@mantine/form'
import {notifications} from '@mantine/notifications'
import {useMutation} from '@tanstack/react-query'
import {z} from 'zod'
import {useNavigate} from 'react-router-dom'
import {DASHBOARD_ROUTES, PUBLIC_ROUTES, Roles} from '@/configs'
import {signInAccount} from '@/apis/account'

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
    mutationFn: signInAccount,
  })

  const navigate = useNavigate()

  const onSubmit = form.onSubmit(async (formData) => {
    const {data, error} = await mutateAsync(formData)
    if (error) {
      return notifications.show({
        title: 'Error',
        message:
          error.message || 'Something went wrong, Please try again later!',
        color: 'red',
        id: 'sign-in',
      })
    } else if (data) {
      notifications.show({
        title: 'Success',
        message: 'Successfully signed in!',
        color: 'green',
      })
      navigate(
        data.user.user_metadata.role_id === Roles.ADMIN
          ? DASHBOARD_ROUTES.ROOT
          : PUBLIC_ROUTES.HOME,
      )
    } else {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong, Please try again later!',
        color: 'red',
        id: 'sign-in',
      })
    }
  })

  return {form, isPending, onSubmit}
}
