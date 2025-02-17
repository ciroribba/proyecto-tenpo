import { useEffect } from 'react';
import { fetchCharacters } from '../../stores/charactersActions';
import { useCharacterStore } from '../../stores/charactersStore';
import { Table, Avatar } from 'antd';
import type { TableColumnsType } from 'antd';
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
    render: (sourceUrl: string) => <a href={sourceUrl} target='_blank' rel='noopener noreferrer'>Link Externo</a>,
  },
];

const TableCharacters = () => {
  const { characters, loading, error } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Table
        columns={columns}
        dataSource={characters}
        rowKey='id'
        pagination={{ pageSize: 50 }}
        scroll={{ y: 55 * 8 }}
      />
      
  </div>
  )
}

export default TableCharacters;