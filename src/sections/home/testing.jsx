// import React, { useState, useEffect } from 'react';
// import { Typography } from '@mui/material';

// const TypingEffect = () => {
//   const text = 'Build systems #withMake ';
//   const [displayedText, setDisplayedText] = useState('');
//   const typingSpeed = 100; // Adjust speed as needed

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[index]);
//       index += 1; // Increment index

//       // Reset if we reach the end of the text
//       if (index >= text.length) {
//         index = 0; // Reset index to start over
//         setDisplayedText(''); // Clear displayed text to start the typing effect again
//       }
//     }, typingSpeed);

//     return () => clearInterval(interval);
//   }, [text, typingSpeed]);

//   return (
//     <Typography
//       variant="h3"
//       style={{
//         color: '#d5006d',
//         fontWeight: 'bold',
//         fontFamily: 'monospace',
//         whiteSpace: 'pre', // Keeps whitespace for new lines
//       }}
//     >
//       {displayedText}
//     </Typography>
//   );
// };

// export default TypingEffect;
