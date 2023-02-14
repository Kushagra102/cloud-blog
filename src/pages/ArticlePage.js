import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from './article-content';
import NotFoundPage from "./NotFoundPage";
import axios from 'axios';
import AddCommentForm from "../components/AddCommentForm";
import CommentsList from "../components/CommentsList";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
    const { articleId } = useParams();
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote: false });
    const { canUpvote } = articleInfo;
    const { user, isLoading } = useUser();

    useEffect(() => {
        const loadArticleInfo = async () => {
            const token = user && await user.getIdToken();
            const headers = token ? { authtoken: token } : {};
            const response = await axios.get(`/api/articles/${articleId}`, { headers });
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        if (!isLoading) {
            loadArticleInfo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, user]);


    const article = articles.find(article => article.name === articleId);
    const addUpVote = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? { authtoken: token } : {};
        const response = await axios.put(`/api/articles/${articleId}/upvote`, null, { headers });
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    if (!article) {
        return (
            <NotFoundPage />
        )
    }
    return (
        <>
            <div className="articles-list">
                <h1>{article.title}</h1>
                <div className="upvotes-section">
                    {user ? <button onClick={addUpVote}>{canUpvote ? 'Upvote' : 'Already Upvoted'}</button> : <button>Log-In to Upvote</button>}
                    <br /><p >This article has {articleInfo.upvotes} upvote(s)</p>
                </div>

                {article.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
                {user ? <AddCommentForm articleName={articleId} onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)} /> : <button>Log-In to add a comment</button>}
                <CommentsList comments={articleInfo.comments} />
            </div>
        </>
    );
}

export default ArticlePage;