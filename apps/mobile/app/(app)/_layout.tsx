import { Stack } from 'expo-router'

import { useColorScheme } from '~/lib/useColorScheme'

export const unstable_settings = {
  initialRouteName: '(root)',
}

export default function AppLayout() {
  const { colorScheme } = useColorScheme()

  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="(protected)" />
      <Stack.Screen name="welcome" />
      <Stack.Screen
        name="sign-up"
        options={{
          presentation: 'modal',
          headerShown: true,
          headerTitle: 'Sign Up',
          // headerStyle: {
          // 	backgroundColor:
          // 		colorScheme === "dark"
          // 			? colors.dark.background
          // 			: colors.light.background,
          // },
          // headerTintColor:
          // 	colorScheme === "dark"
          // 		? colors.dark.foreground
          // 		: colors.light.foreground,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: 'modal',
          headerShown: true,
          headerTitle: 'Sign In',
          // headerStyle: {
          // 	backgroundColor:
          // 		colorScheme === "dark"
          // 			? colors.dark.background
          // 			: colors.light.background,
          // },
          // headerTintColor:
          // 	colorScheme === "dark"
          // 		? colors.dark.foreground
          // 		: colors.light.foreground,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          headerShown: true,
          headerTitle: 'Modal',
          // headerStyle: {
          // 	backgroundColor:
          // 		colorScheme === "dark"
          // 			? colors.dark.background
          // 			: colors.light.background,
          // },
          // headerTintColor:
          // 	colorScheme === "dark"
          // 		? colors.dark.foreground
          // 		: colors.light.foreground,
          gestureEnabled: true,
        }}
      />
    </Stack>
  )
}
