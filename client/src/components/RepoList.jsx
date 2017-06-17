import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';
const RepoList = (props) => (
  <div>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Username</th>
          <th>Repo Name</th>
        </tr>
      </thead>
       <tbody>
        {props.repos.map(repoObj => 
          <RepoListEntry repo={repoObj} key={repoObj._id}/>)
        }
      </tbody> 
    </table>
  </div>
)

export default RepoList;