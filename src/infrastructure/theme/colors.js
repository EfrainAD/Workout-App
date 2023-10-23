const tertiary = [
// shade of lavender or light purple. It's a relatively pale and pastel shade of purple with a hint of blue. This color is often used in design for its soft and calming appearance. 
"#B080FF",

// The color "#FF6E00" is a vivid shade of orange. It is a warm and energetic color often associated with attributes such as enthusiasm, creativity, and warmth
"#FF9346"
]
const neutral = [
   "#2E2E2E",
//  "#2E2E2E": This is a very dark gray, almost black. It's a neutral color often used for text or background elements to create a high contrast, especially in web design.
   "#3B3B3B", 
// "#3B3B3B": Similar to the previous color, it's also a very dark gray, slightly lighter than the first one. It's another neutral color used for creating contrast and depth in design.
   "#474747", 
// "#474747": This color is a medium to dark gray, often used for background elements where a darker but not too heavy shade of gray is needed.
   "#A5A5A5", 
// "#A5A5A5": This is a mid-tone gray, a more neutral and balanced shade of gray. It's often used for various design elements and backgrounds where a neutral and non-distracting color is desired.
   "EFEFEF"]
// "EFEFEF": This color is a very light gray, almost white. It's a soft and subtle shade, often used as a neutral background color in design, providing a clean and modern look.


export const colors = {
   // brand: {
   //    primary: '#2182BD',
   //    secondary: '#5282BD',
   //    muted: '#C6DAF7',
   // },
   ui: {
      // primary: '#262626',
      // secondary: 'green',
      secondary: '#757575',
      // tertiary: '#F1F1F1',
      // quaternary: '#FFFFFF',
      // disabled: '#DEDEDE',
      // error: '#D0421B',
      // success: '#138000',
   },
   bg: {
      neutral: neutral,
   },
   calendar: {
      current: {
         // "#FF6E00" is a vivid shade of orange. It is a warm and energetic color often associated with attributes such as enthusiasm, creativity, and warmth
         workout: '#FF6E00',
         noWorkout: neutral[3],
      },
      pastWorkout: tertiary[0],
      noWorkout: "#2E2E2E",
   },

   icon: {
      // primary: '#FF6E00',
      // secondary: secondary,
      // lavender
      tertiary: tertiary[0],
      orange: tertiary[1],
      // "#F7F7F7" is a very light gray
      neutral: '#F7F7F7',
   },
   text: {
      neutral: '#F7F7F7',
      // primary: '#262626',
      // secondary: '#757575',
      // disabled: '#9C9C9C',
      // inverse: '#FFFFFF',
      // error: '#D0421B',
      // success: '#138000',
   },
   borders: {
      neutral: '#A5A5A5'
   }
}
