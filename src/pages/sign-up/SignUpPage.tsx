import {AuthFormLayout} from '@/components/layouts'
import {AUTH_ROUTES} from '@/configs'
import {Box, Button, Flex, Text, TextInput} from '@mantine/core'
import {Link} from 'react-router-dom'
import {useSignUp} from './hooks/useSignUp'

export function SignUpPage() {
  const {onSubmit, form, isPending} = useSignUp()
  return (
    <AuthFormLayout
      title="Welcome!"
      subTitle="Create your account to enjoy Blogs!">
      <Box onSubmit={onSubmit} component="form">
        <Flex direction="column" rowGap="sm">
          <TextInput
            label="Username"
            withAsterisk
            placeholder="John"
            {...form.getInputProps('username')}
          />
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
          <Flex direction="column" rowGap="xs">
            <Button type="submit">
              {isPending ? 'Loading...' : 'Continue'}
            </Button>
            <Link
              to={{
                pathname: AUTH_ROUTES.SIGN_IN,
              }}>
              <Text size="sm" ta="center">
                Already account?
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </AuthFormLayout>
  )
}
