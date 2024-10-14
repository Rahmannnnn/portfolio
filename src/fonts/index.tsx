import localFont from 'next/font/local';
const BASE_NEUE_NORMAL = localFont({
  src: [
    {
      path: './Normal/BaseNeue-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-ThinOblique.ttf',
      weight: '100',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-ExtraLightOblique.ttf',
      weight: '200',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-LightOblique.ttf',
      weight: '300',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-Oblique.ttf',
      weight: '400',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-MediumOblique.ttf',
      weight: '500',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-SemiBoldOblique.ttf',
      weight: '600',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-BoldOblique.ttf',
      weight: '700',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-ExtraBoldOblique.ttf',
      weight: '800',
      style: 'oblique',
    },
    {
      path: './Normal/BaseNeue-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Normal/BaseNeue-BlackOblique.ttf',
      weight: '900',
      style: 'oblique',
    },
  ],
  variable: '--font-base-neue-normal',
});

const BASE_NEUE_CONDENSED = localFont({
  src: [
    {
      path: './Condensed/BaseNeue-CondensedThin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedThinOblique.ttf',
      weight: '100',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedExtraLightOblique.ttf',
      weight: '200',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedLightOblique.ttf',
      weight: '300',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-Condensed.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedOblique.ttf',
      weight: '400',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedMediumOblique.ttf',
      weight: '500',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedSemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedSemiBoldOblique.ttf',
      weight: '600',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedBoldOblique.ttf',
      weight: '700',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedExtraBoldOblique.ttf',
      weight: '800',
      style: 'oblique',
    },
    {
      path: './Condensed/BaseNeue-CondensedBlack.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Condensed/BaseNeue-CondensedBlackOblique.ttf',
      weight: '900',
      style: 'oblique',
    },
  ],
  variable: '--font-base-neue-condensed',
});

const BASE_NEUE_EXPANDED = localFont({
  src: [
    {
      path: './Expanded/BaseNeue-ExpandedThin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedThinOblique.ttf',
      weight: '100',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedExtraLightOblique.ttf',
      weight: '200',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedLightOblique.ttf',
      weight: '300',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-Expanded.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedOblique.ttf',
      weight: '400',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedMediumOblique.ttf',
      weight: '500',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedSemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedSemiBoldOblique.ttf',
      weight: '600',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedBoldOblique.ttf',
      weight: '700',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedExtraBoldOblique.ttf',
      weight: '800',
      style: 'oblique',
    },
    {
      path: './Expanded/BaseNeue-ExpandedBlack.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Expanded/BaseNeue-ExpandedBlackOblique.ttf',
      weight: '900',
      style: 'oblique',
    },
  ],
  variable: '--font-base-neue-expanded',
});

const BASE_NEUE_WIDE = localFont({
  src: [
    {
      path: './Wide/BaseNeue-WideThin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideThinOblique.ttf',
      weight: '100',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideExtraLightOblique.ttf',
      weight: '200',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideLightOblique.ttf',
      weight: '300',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-Wide.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideOblique.ttf',
      weight: '400',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideMediumOblique.ttf',
      weight: '500',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideSemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideSemiBoldOblique.ttf',
      weight: '600',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideBold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideBoldOblique.ttf',
      weight: '700',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideExtraBoldOblique.ttf',
      weight: '800',
      style: 'oblique',
    },
    {
      path: './Wide/BaseNeue-WideBlack.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Wide/BaseNeue-WideBlackOblique.ttf',
      weight: '900',
      style: 'oblique',
    },
  ],
  variable: '--font-base-neue-wide',
});

export const BaseNeue = {
  normal: BASE_NEUE_NORMAL,
  condensed: BASE_NEUE_CONDENSED,
  expanded: BASE_NEUE_EXPANDED,
  wide: BASE_NEUE_WIDE,
};
