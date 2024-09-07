import React, { useState } from 'react';
import styled from 'styled-components';

const ReportContainer = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input, textarea {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    padding: 10px 20px;
    color: white;
    background-color: #ff6347;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const IssueList = styled.div`
  margin-top: 50px;
`;

const IssueItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IssueTitle = styled.h3`
  margin: 0;
`;

const IssueImage = styled.img`
  margin-top: 10px;
  max-width: 100%;
  border-radius: 5px;
`;

const IssueDescription = styled.p`
  margin: 10px 0;
`;

const VoteButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const UpvoteButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #28a745;
  cursor: pointer;
`;

const DownvoteButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #dc3545;
  cursor: pointer;
`;

const ReportIssues = () => {
  const [issues, setIssues] = useState([
    { title: 'Broken Road in Lagos', description: 'The road is damaged and dangerous to drive on.', votes: 5, downvotes: 2, image: '' },
    { title: 'Unsafe School Building in Abuja', description: 'The school building is structurally weak and poses a danger.', votes: 3, downvotes: 1, image: '' }
  ]);
  const [image, setImage] = useState(null);

  const handleUpvote = (index) => {
    const newIssues = [...issues];
    newIssues[index].votes += 1;
    setIssues(newIssues);
  };

  const handleDownvote = (index) => {
    const newIssues = [...issues];
    newIssues[index].downvotes += 1;
    setIssues(newIssues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = {
      title: e.target.title.value,
      description: e.target.description.value,
      votes: 0,
      downvotes: 0,
      image: image ? URL.createObjectURL(image) : '',
    };
    setIssues([newIssue, ...issues]);
    e.target.reset();
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <ReportContainer>
      <h2>Report an Issue</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Issue Title" required />
        <textarea name="description" placeholder="Describe the issue" rows="5" required></textarea>
        <input type="file" onChange={handleImageChange} accept="image/*" />
        <button type="submit">Submit</button>
      </Form>

      <IssueList>
        <h2>Reported Issues</h2>
        {issues.map((issue, index) => (
          <IssueItem key={index}>
            <IssueHeader>
              <IssueTitle>{issue.title}</IssueTitle>
            </IssueHeader>
            <IssueDescription>{issue.description}</IssueDescription>
            {issue.image && <IssueImage src={issue.image} alt="Issue" />}
            <VoteButtons>
              <UpvoteButton onClick={() => handleUpvote(index)}>
                Upvote ({issue.votes})
              </UpvoteButton>
              <DownvoteButton onClick={() => handleDownvote(index)}>
                Downvote ({issue.downvotes})
              </DownvoteButton>
            </VoteButtons>
          </IssueItem>
        ))}
      </IssueList>
    </ReportContainer>
  );
};

export default ReportIssues;
