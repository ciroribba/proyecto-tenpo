import { useEffect } from 'react';
import { Table, Avatar, Spin } from 'antd';
import type { TableColumnsType } from 'antd';
import TitleContent  from '../../components/TitleContent';
import { fetchCharacters } from '../../stores/characters/actions/charactersActions';
import { useCharacterStore } from '../../stores/characters/charactersStore';
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
    fetchCharacters(2000);
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <TitleContent title='Personajes del universo Disney (2000 registros)' />
      <Spin spinning={loading}>
      <Table
        columns={columns}
        dataSource={!loading ? characters : []}
        rowKey="_id"
        scroll={{ y: 55 * 8 }}
      />
      </Spin>
  </div>
  )
}

export default TableCharacters;