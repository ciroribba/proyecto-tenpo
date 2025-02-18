import { Typography } from "antd";

const { Title } = Typography;

const TitleContent: React.FC<{ title: string }> = ({ title }) => {
    return <Title>{title}</Title>;
  };

  export default TitleContent;