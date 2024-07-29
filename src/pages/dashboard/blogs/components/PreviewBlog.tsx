import {colors} from '@/configs'
import {Badge, Button, Flex, Paper, Text} from '@mantine/core'
import {IconCalendar, IconFile} from '@tabler/icons-react'
import dayjs from 'dayjs'
import {memo} from 'react'

export const PreviewBlog = memo((props: Blog) => {
  const {title, created_at, tag, is_draft} = props
  return (
    <Paper
      component="div"
      p="md"
      w="100%"
      style={{
        borderLeft: `2px solid ${colors.blue[6]}`,
      }}
      h="100%">
      <Flex direction="column" rowGap="xs">
        <Flex justify="space-between">
          <IconFile width={24} height={24} color={colors.gray[6]} />
          <Text size="xs" c={is_draft ? 'red.7' : 'green.7'}>
            {is_draft ? 'DRAFT' : 'PUBLIC'}
          </Text>
        </Flex>
        <Text size="sm" fw={400} c="gray.7" lineClamp={1}>
          {title}
        </Text>
        <Flex columnGap="xs">
          {tag.split(',').map((t) => (
            <Badge size="xs" color="gray">
              {t}
            </Badge>
          ))}
        </Flex>
        <Flex justify="space-between">
          <Flex columnGap="4px">
            <IconCalendar width={20} height={20} color={colors.gray[7]} />
            <Text size="sm" fw={400} c="gray.7">
              {dayjs(created_at).format('YYYY/MM/DD')}
            </Text>
          </Flex>
          <Button size="xs" variant="outline">
            Keep Editing
          </Button>
        </Flex>
      </Flex>
    </Paper>
  )
})
