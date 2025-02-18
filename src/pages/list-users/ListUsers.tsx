import React, { useEffect, useState } from 'react';
import { Avatar, List, message, Space, Spin } from 'antd';
import VirtualList from 'rc-virtual-list';
import axios from 'axios';
import TitleContent  from '../../components/TitleContent';
import { formatDate, useIsMobile } from '../../utils/utils';
import { UserItem } from '../../types/listUserTypes';
import { ENDPOINT } from '../../config/endpoints';

const ContainerHeight = 400;

const ListUsers: React.FC = () => {
  const [data, setData] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const isMobile = useIsMobile();

  const appendData = async (showMessage = true) => {
    try {
      const response = await axios.get(ENDPOINT.FAKE_DATA_LIST);
      const body = response.data;
      setData(data.concat(body.results));
      if (showMessage) {
        message.success(`${body.results.length} more items loaded!`);
      }
    } catch (error) {
      console.log(error);
      message.error('Error loading data');
    } finally {
      setLoading(false);
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
    <>
    <TitleContent title='Lista de usuarios fake' />
    <Spin spinning={loading}>
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
            <Space direction="vertical" className={ isMobile ? 'text-left mr-12' : 'text-right mr-12'}>
             {isMobile ? <div>{`Email: ${item.email}`}</div> : null}
              <div>{`Pais de origen: ${item.location.country}`}</div>
              <div>{`Fecha de nacimiento: ${formatDate(item.dob.date)}`}</div>
              <div>{`Edad: ${item.dob.age}`}</div>
            </Space>
          </List.Item>
        )}
      </VirtualList>
    </List>
    </Spin>
    </>
  );
};

export default ListUsers;