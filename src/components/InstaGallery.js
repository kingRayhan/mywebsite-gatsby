import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-component";

const StyledGalleryImage = styled.a`
  width: 400px;
`;

const StyledGallery = styled.div`
  margin: auto;
  .masonry {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: auto;
    width: 90%;
  }
`;

const InstaGallery = ({ data }) => {
  return (
    <div className="pt-5 insta-gallery">
      <div className="pb-5 text-center">
        <a
          href="https://www.instagram.com/king_rayhan/"
          rel="noopener noreferrer"
          target="_blank"
          className="insta-url"
        >
          <svg
            width="35"
            viewBox="0 0 512.00096 512.00096"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0" />
            <path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0" />
            <path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0" />
          </svg>
          &nbsp; king_rayhan
        </a>
      </div>
      <StyledGallery>
        <Masonry className="masonry">
          {data.allInstaNode.nodes.map((node) => (
            <StyledGalleryImage
              rel="noopener noreferrer"
              href={`https://www.instagram.com/p/${node.id}`}
              key={node.id}
            >
              <img src={node.original} alt={node.id} />
            </StyledGalleryImage>
          ))}
        </Masonry>
      </StyledGallery>
    </div>
  );
};

export default InstaGallery;
