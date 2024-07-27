import {AuthFormLayout} from '@/components/layouts'
import {AUTH_ROUTES} from '@/configs'
import {Box, Button, Flex, Text, TextInput} from '@mantine/core'
import {Link} from 'react-router-dom'
import {useSignIn} from './hooks/useSignIn'

export function SignInPage() {
  const {form, onSubmit, isPending} = useSignIn()
  return (
    <AuthFormLayout
      title="Welcome Back!"
      subTitle="Sign in your account to enjoy Blogs!">
      <Box onSubmit={onSubmit} component="form">
        <Flex direction="column" rowGap="sm">
          <TextInput
            label="Email"
            type="email"
            withAsterisk
            placeholder="john@mail.com"
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Password"
            type="password"
            withAsterisk
            placeholder="Your password"
            {...form.getInputProps('password')}
          />
          <Flex direction="column" rowGap="xs" justify="center">
            <Button type="submit">
              {isPending ? 'Loading...' : 'Continue'}
            </Button>
            <Link
              to={{
                pathname: AUTH_ROUTES.SIGN_UP,
              }}>
              <Text size="sm" ta="center">
                Not yet account?
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </AuthFormLayout>
  )
}
