import {createNewBlog} from '@/apis/blog'
import {useForm, zodResolver} from '@mantine/form'
import {notifications} from '@mantine/notifications'
import {useMutation} from '@tanstack/react-query'
import {useCallback} from 'react'
import {z} from 'zod'

const schema = z.object({
  title: z
    .string({
      required_error: 'Please enter blog title!',
    })
    .min(3, 'Should be at least 3 characters!')
    .max(100, 'Should not over than 100 characters! '),
  tag: z
    .string({
      required_error: 'Please enter blog tag!',
    })
    .min(3, 'Should be at least 3 characters!')
    .max(30, 'Should not over than 30 characters!'),
  slug: z.string(),
})

type FormType = z.infer<typeof schema>

type UseCreateNewBlogParamType = {
  onAfterSubmit: (id: string) => void
  onAfterSaveDraft: () => void
}

export function useCreateNewBlog(param: UseCreateNewBlogParamType) {
  const form = useForm<FormType>({
    validate: zodResolver(schema),
    mode: 'uncontrolled',
  })
  const {mutateAsync, isPending} = useMutation({
    mutationKey: ['create-new-blog'],
    mutationFn: createNewBlog,
  })
  const {onAfterSubmit, onAfterSaveDraft} = param

  // listener for title and state update to slug
  form.watch('title', (titleState) => {
    const value = titleState.value
    if (value) {
      form.setFieldValue(
        'slug',
        titleState.value.toLowerCase().replace(/ /g, '-'),
      )
    }
  })

  const handleCreate = useCallback(
    async (formData: FormType) => {
      const response = await mutateAsync(formData)
      const {error} = response
      if (error) {
        if (error.code === '23505') {
          notifications.show({
            title: 'Error',
            message: 'Duplicate Blog title!',
            color: 'red',
            id: 'create-new-blog',
          })
        } else {
          notifications.show({
            title: 'Error',
            message: 'Failed to save, Please try again or later!',
            color: 'red',
            id: 'create-new-blog',
          })
        }
      } else {
        notifications.show({
          title: 'Succeess',
          message: 'Successfully created!',
        })
      }
      return response
    },
    [mutateAsync],
  )

  const onSubmit = form.onSubmit(async (formData) => {
    if (isPending) {
      return
    }
    const {error, data} = await handleCreate(formData)
    if (!error) {
      onAfterSubmit(data ? data[0].id : '')
    }
  })

  const onSaveAsDraft = form.onSubmit(async (formData) => {
    if (isPending) {
      return
    }
    const {error} = await handleCreate(formData)
    if (!error) {
      onAfterSaveDraft()
    }
  })

  return {form, isPending, onSubmit, onSaveAsDraft}
}
