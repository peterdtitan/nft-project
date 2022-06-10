import { TouchableOpacity, View, Text, Image } from 'react-native'

import { COLORS, SIZES, FONTS, SHADOWS } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
  return (
    <TouchableOpacity
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props,
        }}
        onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
    </TouchableOpacity>
  )
}


export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
    return (
      <TouchableOpacity
      style={{
          backgroundColor: COLORS.primary,
          borderRadius: SIZES.extraLarge,
          minWidth: minWidth,
          padding: SIZES.small,
          ...props,
      }}
      onPress={handlePress}
      >
        <Text style={{
          fontFamily: SIZES.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: 'center'
        }}>
          Place a bid
        </Text>
  </TouchableOpacity>
    )
  }
