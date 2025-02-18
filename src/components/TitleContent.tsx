import { Typography } from "antd";

const { Title } = Typography;

const TitleContent: React.FC<{ title: string }> = ({ title }) => {
    return <Title level={3} style={{marginTop: 0}}>{title}</Title>;
  };

  export default TitleContent;