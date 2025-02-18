import { Typography } from "antd";

const { Title } = Typography;

const TitleContent: React.FC<{ title: string }> = ({ title }) => {
    return <Title level={3} className="mt-0">{title}</Title>;
  };

  export default TitleContent;