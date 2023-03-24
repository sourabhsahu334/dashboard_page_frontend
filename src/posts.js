// in src/posts.js
import { List, Datagrid, TextField, DateField, BooleanField } from 'react-admin';
import Dashboard from './component/dashboard';
import Typography from 'typography';
import Action from "./component/Action"
export const PostList = () => (
   <div>
    
    <List >
        <Datagrid actions={<Action/>}>
            <TextField source="id" />
            <TextField source="title" />
            <DateField source="published_at" />
            <TextField source="category" />
            <BooleanField source="commentable" />
        </Datagrid>
    </List>
   </div>
);
const Aside = () => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant="h6">Post details</Typography>
        <Typography variant="body2">
            Posts will only be published once an editor approves them
        </Typography>
    </div>
);

