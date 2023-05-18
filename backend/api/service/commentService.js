import Comment from '../model/Comment.js';

export const save = async (comment) => {
    const newComment = new Comment(comment);
    return newComment.save();
}

export const listAll = async (universityId) => {
    let comments;
    if (universityId != null || universityId != undefined) return comments = await Comment.find({ 'universityId': universityId });
    comments = await Comment.find();
    return comments;
}

export const findCommentById = async (id) => {
    const comment = Comment.findById(id)
    return comment;
}

export const update = async (id, updatedComment) => {
    const comment = await Comment.findById(id);

    if (!comment) return;

    updatedComment.updatedAt = Date.now();
    comment.set(updatedComment);

    return comment.save();
}

export const remove = async (id) => {
    return Comment.findOneAndDelete({ _id: id }).exec();
}