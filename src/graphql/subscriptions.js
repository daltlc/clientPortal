/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
      id
      title
      description
      status
    }
  }
`;
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
      id
      title
      description
      status
    }
  }
`;
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
      id
      title
      description
      status
    }
  }
`;
export const onCreatePrivateNote = /* GraphQL */ `
  subscription OnCreatePrivateNote($owner: String!) {
    onCreatePrivateNote(owner: $owner) {
      id
      content
      owner
    }
  }
`;
export const onUpdatePrivateNote = /* GraphQL */ `
  subscription OnUpdatePrivateNote($owner: String!) {
    onUpdatePrivateNote(owner: $owner) {
      id
      content
      owner
    }
  }
`;
export const onDeletePrivateNote = /* GraphQL */ `
  subscription OnDeletePrivateNote($owner: String!) {
    onDeletePrivateNote(owner: $owner) {
      id
      content
      owner
    }
  }
`;
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin {
    onCreateAdmin {
      id
      email
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin {
    onUpdateAdmin {
      id
      email
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin {
    onDeleteAdmin {
      id
      email
    }
  }
`;
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember($owner: String) {
    onCreateMember(owner: $owner) {
      id
      email
      owner
    }
  }
`;
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember($owner: String) {
    onUpdateMember(owner: $owner) {
      id
      email
      owner
    }
  }
`;
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember($owner: String) {
    onDeleteMember(owner: $owner) {
      id
      email
      owner
    }
  }
`;
