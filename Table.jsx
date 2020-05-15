import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
            <tr>
                <th>Nama</th>
                <th>Hobi</th>
                <th>Aksi</th>
            </tr>
        </thead>
  );
}

const TableBody = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
                <td>{row.nama}</td>
                <td>{row.hobi}</td>
                <td><button onClick={() => props.removeCharacter(index)} className="btn btn-danger">Delete</button></td>
            </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

const Table = (props) => {
  const { characterData, removeCharacter } = props;
  return (
    <div class="table-responsive">
    <table className="table table-bordered">
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
            </div>
  );
}

export default Table