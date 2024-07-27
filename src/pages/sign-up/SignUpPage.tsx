import {AuthFormLayout} from '@/components/layouts'
import {AUTH_ROUTES} from '@/configs'
import {Box, Button, Flex, TextInput} from '@mantine/core'
import {Link} from 'react-router-dom'

export function SignUpPage() {
  return (
    <AuthFormLayout
      title="Welcome!"
      subTitle="Create your account to enjoy Blogs!">
      <Box component="form">
        <Flex direction="column" rowGap="sm">
          <TextInput label="Username" withAsterisk placeholder="John" />
          <TextInput
            label="Email"
            type="email"
            withAsterisk
            placeholder="john@mail.com"
          />
          <TextInput
            label="Password"
            type="password"
            withAsterisk
            placeholder="Your password"
          />
          <Flex direction="column" rowGap="xs" justify="center">
            <Button>Continue</Button>
            <Button
              component={Link}
              to={{
                pathname: AUTH_ROUTES.SIGN_IN,
              }}
              variant="subtle"
              size="sm">
              Not yet account?
            </Button>
          </Flex>
        </Flex>
      </Box>
    </AuthFormLayout>
  )
}
