import React from 'react'; // get the React object from the react module
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CLink
} from '@coreui/react';
import { DocsExample } from 'src/components'


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/article');
        setPosts(response.data.data);
    }

    const deletePosts = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/article/${id}`);
        getPosts();
    }
    // componentDidMount() {

    //     axios.get('http://127.0.0.1:8000/api/article')
    //         .then(res => {
    //             const persons = res.data.data;
    //             this.setState({ persons });
    //         })
    // }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>React Table</strong> <small>Striped rows</small>
                    </CCardHeader>
                    <CCardBody>
                        <p className="text-medium-emphasis small">
                            Use <code>striped</code> property to add zebra-striping to any table row within the{' '}
                            <code>&lt;CTableBody&gt;</code>.
                        </p>
                        <DocsExample href="components/table#striped-rows">
                            <CTable striped>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">No</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Title</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Content</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Category</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Cteated Date</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Updated Date</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>

                                    {posts.map((post, index) => (
                                        <CTableRow key={posts.id}>
                                            <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                                            <CTableDataCell>{post.title}</CTableDataCell>
                                            <CTableDataCell>{post.content}</CTableDataCell>
                                            <CTableDataCell>{post.category}</CTableDataCell>
                                            <CTableDataCell>{post.created_at}</CTableDataCell>
                                            <CTableDataCell>{post.updated_at}</CTableDataCell>
                                            <CTableDataCell>{post.status}</CTableDataCell>
                                            <CTableDataCell>
                                                <Link to={`/allpost/editposts/${post.id}`} className="button is-small is-info">Edit</Link>
                                                <button onClick={() => deletePosts(post.id)} className="button is-small is-danger">Delete</button>


                                            </CTableDataCell>
                                        </CTableRow>
                                    ))}
                                </CTableBody>
                            </CTable>
                        </DocsExample>
                        <p className="text-medium-emphasis small">
                            These classes can also be added to table variants:
                        </p>
                    </CCardBody>
                </CCard>
            </CCol>


        </CRow>
    )

}


export default Posts; 