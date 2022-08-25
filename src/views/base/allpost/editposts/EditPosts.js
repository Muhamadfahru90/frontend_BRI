import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
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
const EditPosts = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const { id } = useParams();

    const updatePosts = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8000/api/article/${id}`, {
            title: title,
            content: content,
            category: category,
            status: status
        });
        history.push("/allpos");
    }

    useEffect(() => {
        getPostsById();
    }, []);

    const getPostsById = async () => {
        const response = await axios.get(`http://localhost:8000/api/article/${id}`);
        setTitle(response.data.data.title);
        setContent(response.data.data.content);
        setCategory(response.data.data.category);
        setStatus(response.data.data.status);
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
                            <CForm onSubmit={updatePosts}>
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
                                    Update
                                </button>
                            </CForm>
                        </DocsExample>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default EditPosts
