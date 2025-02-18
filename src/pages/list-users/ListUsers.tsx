import React, { useEffect, useState } from 'react';
import { Avatar, List, message, Space } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    country: string;
  };
  dob: {
        date: string;
        age: number;
      },
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,dob,location,email,nat,picture&noinfo';
const ContainerHeight = 400;

const ListUsers: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const appendData = async (showMessage = true) => {
    try {
      const response = await axios.get(fakeDataUrl);
      const body = response.data;
      setData(data.concat(body.results));
      if (showMessage) {
        message.success(`${body.results.length} more items loaded!`);
      }
    } catch (error) {
      console.log(error);
      message.error('Error loading data');
    }
  };

  useEffect(() => {
    appendData(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  return (
    <List
      itemLayout={isMobile ? 'vertical' : 'horizontal' }
    >
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<>{item.name.last}</>}
              description={isMobile ? null : item.email}
            />
            <Space direction="vertical" style={isMobile ? { textAlign: 'left' }: { textAlign: 'right' }}>
             {isMobile ? <div>{`Email: ${item.email}`}</div> : null}
              <div>{`Pais de origen: ${item.location.country}`}</div>
              <div>{`Fecha de nacimiento: ${new Date(item.dob.date).toLocaleDateString()}`}</div>
              <div>{`Edad: ${item.dob.age}`}</div>
            </Space>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default ListUsers;