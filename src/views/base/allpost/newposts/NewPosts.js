import React from 'react'
import { useState } from 'react'
import axios from "axios";
// import { useHistory } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const NewPosts = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('');
    // const history = useHistory();

    const savePost = async (e) => {
        e.preventDefault();


        await axios.post('http://localhost:8000/api/article', {
            title: title,
            content: content,
            category: category,
            status: status
        }).then(res => {
            console.log("response", res)
        });
        console.log("title", title);
        history.push("/");
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Add New Posts</strong>
                    </CCardHeader>
                    <CCardBody>
                        <DocsExample href="forms/form-control">
                            <CForm onSubmit={savePost}>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput1">Title</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="title"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="category">Category</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="category"
                                        placeholder="Category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <CFormLabel htmlFor="content">Content</CFormLabel>
                                    <CFormTextarea
                                        id="content" rows="3"
                                        placeholder="Content"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    ></CFormTextarea>
                                </div>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="status">Status</CFormLabel>
                                    <CFormInput
                                        type="text"
                                        id="status"
                                        placeholder="Status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    />
                                </div>
                                <button component="a" color="primary" href="#" role="button">
                                    Tambah Posts
                                </button>
                            </CForm>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default NewPosts
