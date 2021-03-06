import React from "react";
import styled from "styled-components";
import Comment from "../Comment";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  background: rgba(142, 142, 142, 0.3);
  height: 300px;
  border-radius: 10px;
  padding: 25px;
  color: #ffffff;

  @media (max-width: 1000px) {
    width: 85vw;
  }
  
`;

const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: rgba(128, 128, 128, 0.78);
  border-radius: 84px;
  height: 60px;
  padding: 15px;
`;

const CommentButton = styled.button`
  width: 92.8px;
  height: 45px;
  background: #149bde;
  border-radius: 84px;
  border: none;
  color: #ffffff;
`;

const CommentInput = styled.input`
  width: 80%;
  height: 45px;
  background: none;
  border-radius: 84px;
  border: none;
  outline: none;
  color: #ffffff;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25px;
  justify-self: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  padding-top: 25px;
  padding: 10px;
  height: 300px;
  width: 100%
  overflow-y: auto;
  margin-top: 10px;



`;

const CommentSection = () => {
  return (
    <Root>
      <CommentInputWrapper>
        <CommentInput placeholder="write a comment" />
        <CommentButton>Submit</CommentButton>
      </CommentInputWrapper>
      <CommentsWrapper>
        <Comment username={"david spade"} commentContents={"wow sick design"} />
        <Comment
          username={"carl anthony"}
          commentContents={"this is kinda cool"}
        />
        <Comment username={"suzie weathers"} commentContents={"yieks"} />
        <Comment
          username={"linda hosain"}
          commentContents={"i dont like drones"}
        />
        <Comment
          username={"cindy poong"}
          commentContents={"i do like drones"}
        />
      </CommentsWrapper>
    </Root>
  );
};

export default CommentSection;

{
  //comments above will be queried in the future 
}
