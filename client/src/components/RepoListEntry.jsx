import React from 'react';

const RepoListEntry = (props) => (
  <tr>
  <td><img src={props.repo.avatar}></img></td>
  <td>{props.repo.username}</td>
  <td><a href={props.repo.repourl}>{props.repo.reponame}</a></td>
  </tr>
)

export default RepoListEntry;