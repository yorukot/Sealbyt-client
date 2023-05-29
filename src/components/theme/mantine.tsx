'use client'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

export default function MantineThemeComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'dark' : 'light'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{ colorScheme }}
            
            withGlobalStyles
            withNormalizeCSS
          >
            {children}
          </MantineProvider>
        </ColorSchemeProvider>
  );
}
