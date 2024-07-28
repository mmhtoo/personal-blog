import {colors, DASHBOARD_ROUTES} from '@/configs'
import {Box, Button, Flex, Modal, Text, TextInput} from '@mantine/core'
import {useDisclosure} from '@mantine/hooks'
import {IconChevronRight, IconPlus} from '@tabler/icons-react'
import {useCreateNewBlog} from '../hooks/useCreateNewBlog'
import {useNavigate} from 'react-router-dom'

export function NewBlogModal() {
  const [opened, {open, close}] = useDisclosure()
  const navigate = useNavigate()
  const {form, onSubmit, isPending} = useCreateNewBlog({
    onAfterSubmit: (id) => {
      close()
      form.reset()
      navigate({
        pathname: DASHBOARD_ROUTES.WRITE_BLOG,
        search: `?id=${id}`,
      })
    },
    onAfterSaveDraft: () => {
      close()
      form.reset()
    },
  })

  return (
    <>
      <Button onClick={open} variant="outline" size="xs">
        <IconPlus width={16} height={16} />
        New Blog
      </Button>
      <Modal
        title={
          <>
            <Text fw={700} size="lg" c="blue">
              New Blog
            </Text>
            <Text fw={400} c="gray.5">
              Press continue to keep writing blog
            </Text>
          </>
        }
        closeOnClickOutside={false}
        opened={opened}
        centered
        onClose={close}>
        <Box onSubmit={onSubmit} component="form">
          <Flex direction="column" rowGap="sm">
            <TextInput
              label="Title"
              labelProps={{
                style: {
                  color: colors.gray[5],
                  fontSize: '14px',
                },
              }}
              placeholder="Blog's title"
              withAsterisk
              autoFocus
              {...form.getInputProps('title')}
            />
            <TextInput
              label="Tag"
              labelProps={{
                style: {
                  color: colors.gray[5],
                  fontSize: '14px',
                },
              }}
              placeholder="Blog's tag"
              withAsterisk
              {...form.getInputProps('tag')}
            />
            <TextInput
              label="Slug"
              placeholder="URL Slug"
              labelProps={{
                style: {
                  color: colors.gray[5],
                  fontSize: '14px',
                },
              }}
              disabled
              withAsterisk
              {...form.getInputProps('slug')}
            />
            <Flex justify="flex-end" mt="lg" columnGap="sm">
              <Button size="sm" variant="outline">
                Save as Draft
              </Button>
              <Button type="submit" size="sm">
                {isPending ? 'Loading...' : 'Continue'}
                <IconChevronRight width={16} height={16} />
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Modal>
    </>
  )
}
