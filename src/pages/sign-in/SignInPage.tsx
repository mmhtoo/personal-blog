import {AuthFormLayout} from '@/components/layouts'
import {AUTH_ROUTES} from '@/configs'
import {Box, Button, Flex, TextInput} from '@mantine/core'
import {Link} from 'react-router-dom'

export function SignInPage() {
  return (
    <AuthFormLayout
      title="Welcome Back!"
      subTitle="Sign in your account to enjoy Blogs!">
      <Box component="form">
        <Flex direction="column" rowGap="sm">
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
                pathname: AUTH_ROUTES.SIGN_UP,
              }}
              variant="subtle"
              size="sm">
              Already account?
            </Button>
          </Flex>
        </Flex>
      </Box>
    </AuthFormLayout>
  )
}
