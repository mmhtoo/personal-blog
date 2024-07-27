import {colors} from '@/configs'
import {Box, Flex, Paper, Text, useMatches} from '@mantine/core'
import {useViewportSize} from '@mantine/hooks'
import {PropsWithChildren} from 'react'

type Props = {
  title: string
  subTitle: string
}

export function AuthFormLayout(props: PropsWithChildren<Props>) {
  const {title, subTitle, children} = props
  const width = useMatches({
    sm: '400px',
  })
  const {width: vw, height: vh} = useViewportSize()
  return (
    <Box component="div">
      <Flex p="sm" w={vw} h={vh} justify="center" align="center">
        <Paper
          style={{
            borderRadius: '8px',
            borderTop: `5px solid ${colors.blue[5]}`,
          }}
          w={width || '100%'}
          shadow="xs"
          p="xl">
          <Text size="xl" fw={700} c="blue.7">
            {title}
          </Text>
          <Text size="sm" fw={500} c="gray.6">
            {subTitle}
          </Text>
          <Box component="div" mt="md">
            {children}
          </Box>
        </Paper>
      </Flex>
    </Box>
  )
}
