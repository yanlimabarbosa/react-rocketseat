import styled from 'styled-components'

interface TitleTextProps {
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  color?: 'title' | 'subtitle' | 'text'
  weight?: string | number
}

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'title' | 'subtitle' | 'label'
  weight?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  line-height: 130%;
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};

  font-family: ${({ theme }) => theme.fonts.family.title};
  font-weight: ${({ weight }) => weight ?? 800};
  font-size: ${({ theme, size }) =>
    theme.fonts.sizes[`title-title-${size ?? 'm'}`]};
`

export const RegularText = styled.p<RegularTextProps>`
  line-height: 130%;
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};

  font-family: ${({ theme }) => theme.fonts.family.title};
  font-weight: ${({ weight }) => weight ?? 400};
  font-size: ${({ theme, size }) =>
    theme.fonts.sizes[`text-regular-${size ?? 'm'}`]};
`
