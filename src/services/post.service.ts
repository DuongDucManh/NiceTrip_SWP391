import { api } from '../api';

const UploadPost = (data: any) => {
    return api.post('/timeshare/upload', data)
        .then((res) => {
            return res.data.data
        })
        .catch((error) => {
            // Handle errors here, you might want to log or show a user-friendly message
            console.error('Error fetching resort by ID:', error);
            throw error; // Re-throw the error to let the caller handle it if needed
        })
}
const GetPost = async () => {
    return api.get('/timeshare')
        .then((res) => {
            return res.data.data.results
        })
        .catch((error) => {
            // Handle errors here, you might want to log or show a user-friendly message
            console.error('Error fetching posts:', error);
            throw error; // Re-throw the error to let the caller handle it if needed
        })
}
const GetPostById = (postId: string) => {
    return api.get(`/timeshare/${postId}`)
        .then((res) => {
            return res.data.data
        })
        .catch((error) => {
            // Handle errors here, you might want to log or show a user-friendly message
            console.error('Error fetching resort by ID:', error);
            throw error; // Re-throw the error to let the caller handle it if needed
        })
}
const GetPostBelongToOwner = (userId: string) => {
    return api.get(`/timeshare/current-owner/${userId}`)
        .then((res) => {
            return res.data.data
        })
        .catch((error) => {
            // Handle errors here, you might want to log or show a user-friendly message
            console.error('Error fetching resort by ID:', error);
            throw error; // Re-throw the error to let the caller handle it if needed
        })
}

export {
    UploadPost,
    GetPost,
    GetPostById,
    GetPostBelongToOwner
}