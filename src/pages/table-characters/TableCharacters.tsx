import { useEffect } from 'react';
import { Table, Avatar, Spin, Card, Descriptions, Divider } from 'antd';
import type { TableColumnsType } from 'antd';
import TitleContent  from '../../components/TitleContent';
import { fetchCharacters } from '../../stores/charactersActions';
import { useCharacterStore } from '../../stores/charactersStore';
import { Character } from '../../types/characterTypes';

const columns: TableColumnsType<Character> = [
  {
    title: 'Avatar',
    dataIndex: 'imageUrl',
    width: 100,
    render: (imageUrl: string) => (
      <div className="avatar-container">
        <Avatar src={imageUrl} className="avatar-image" />
      </div>
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: 'Films',
    dataIndex: 'films',
    width: 150,
    render: (films: string[]) => films[0],
  },
  {
    title: 'Ver detalle',
    dataIndex: 'sourceUrl',
    width: 150,
    key: 'link',
    render: (sourceUrl: string) => <a href={sourceUrl} target='_blank' rel='noopener noreferrer'>Fandom Page</a>,
  },
];

const TableCharacters = () => {
  const { characters, loading, error } = useCharacterStore();

  useEffect(() => {
    fetchCharacters(100);
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <TitleContent title='Personajes del universo Disney' />
      <Spin spinning={loading}>
      <Table
        columns={columns}
        dataSource={!loading ? characters : []}
        rowKey='id'
        scroll={{ y: 55 * 8 }}
      />
      </Spin>
      <Divider style={{marginTop: 16, marginBottom: 16, borderColor: '#1890ff'}}>Sobre la API</Divider>
      <Card  className="mt-12">
        <Descriptions column={1} bordered>
          <Descriptions.Item label="URL">
            <a
              href="https://randomuser.me/api/?results=2000&inc=name,gender,dob,location,email,nat,picture&noinfo"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://randomuser.me/api/?results=2000&inc=name,gender,dob,location,email,nat,picture&noinfo
            </a>
          </Descriptions.Item>
          <Descriptions.Item label="Descripción">
            Proporciona datos de usuarios aleatorios para pruebas y prototipos. La solicitud retorna 20 usuarios y solo incluye campos específicos (nombre, género, fecha de nacimiento, ubicación, correo electrónico,
            nacionalidad e imagen). Se utiliza en el proyecto para poblar listas de usuarios con datos falsos.
          </Descriptions.Item>
        </Descriptions>
      </Card>
  </div>
  )
}

export default TableCharacters;