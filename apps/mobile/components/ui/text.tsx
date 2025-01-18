import * as Slot from '@rn-primitives/slot'
import type { SlottableTextProps, TextRef } from '@rn-primitives/types'
import * as React from 'react'
import { Text as RNText } from 'react-native'
import { cn } from '~/lib/utils'

const TextClassContext = React.createContext<string | undefined>(undefined)

const Text = React.forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = React.useContext(TextClassContext)
    const Component = asChild ? Slot.Text : RNText

    // Transform className to use Poppins variants
    const transformedClassName = className?.replace(
      /font-(normal|medium|semibold|bold|extrabold|thin|extralight)/g,
      (match) => {
        const weights: Record<string, string> = {
          'font-normal': 'font-Poppins-Regular',
          'font-medium': 'font-Poppins-Medium',
          'font-semibold': 'font-Poppins-SemiBold',
          'font-bold': 'font-Poppins-Bold',
          'font-extrabold': 'font-Poppins-ExtraBold',
          'font-thin': 'font-Poppins-Thin',
          'font-extralight': 'font-Poppins-ExtraLight',
        }
        return weights[match as keyof typeof weights] || 'font-Poppins-Regular'
      }
    )

    return (
      <Component
        className={cn(
          'text-base text-foreground font-Poppins-Regular web:select-text',
          textClass,
          transformedClassName
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Text.displayName = 'Text'

export { Text, TextClassContext }
