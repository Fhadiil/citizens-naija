// src/components/ReportIssues.js

import React, { useState } from "react";
import styled from "styled-components";

const ReportContainer = styled.div`
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input,
  textarea {
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
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
`;

const IssueTitle = styled.h3`
  margin: 0;
`;

const UpvoteButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: #ff6347;
  cursor: pointer;
`;

const ReportIssues = () => {
  const [issues, setIssues] = useState([
    { title: "Broken Road in Lagos", votes: 5 },
    { title: "Unsafe School Building in Abuja", votes: 3 },
  ]);

  const handleUpvote = (index) => {
    const newIssues = [...issues];
    newIssues[index].votes += 1;
    setIssues(newIssues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = { title: e.target.title.value, votes: 0 };
    setIssues([newIssue, ...issues]);
    e.target.reset();
  };

  return (
    <ReportContainer>
      <h2>Report an Issue</h2>
      <Form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Issue Title" required />
        <textarea
          name="description"
          placeholder="Describe the issue"
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </Form>

      <IssueList>
        <h2>Reported Issues</h2>
        {issues.map((issue, index) => (
          <IssueItem key={index}>
            <IssueTitle>{issue.title}</IssueTitle>
            <UpvoteButton onClick={() => handleUpvote(index)}>
              Upvote ({issue.votes})
            </UpvoteButton>
          </IssueItem>
        ))}
      </IssueList>
    </ReportContainer>
  );
};

export default ReportIssues;
