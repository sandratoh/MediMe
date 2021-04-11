import { action } from "@storybook/addon-actions";
import Header from "../components/Header";

export default { 
  title: 'Header',
  component: Header,
};

export const Default = () => (
  <Header 
    onMenu={action('Menu button clicked')}
    onLogo={action('Home button clicked')}
  />
)