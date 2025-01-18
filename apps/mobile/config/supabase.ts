import 'react-native-url-polyfill/auto'

import { createClient } from '@supabase/supabase-js'
import { AppState } from 'react-native'

const supabaseUrl = process.env.EXPO_PUBLIC_API_URL as string
const supabaseKey = process.env.EXPO_PUBLIC_API_KEY as string

export const supabase = createClient(supabaseUrl, supabaseKey)

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})
