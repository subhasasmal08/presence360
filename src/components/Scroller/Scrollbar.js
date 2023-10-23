import React from "react";
import Scrollbars from "react-custom-scrollbars";

const Scroller = React.forwardRef(
  (
    {
      children,
      autoHeightMin = "4vh",
      autoHeightMax,
      verticalStyle = {
        width: "0.20vw",
        // marginLeft: "0.2vw",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        overflow: "hidden"

      },
      horizontalStyle={
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        overflow: "hidden"

      },
      onScrollFrame,
      onScroll,
      onScrollStart,
      scrollToTop,
    },
    ref
  ) => {
    return (
      <Scrollbars
        autoHeight
        autoHeightMin={autoHeightMin}
        autoHeightMax={autoHeightMax}
        hideTracksWhenNotNeeded
        renderThumbVertical={({ style, ...props }) => (
          <div {...props} style={{ ...verticalStyle, borderRadius: "4px" }} />
        )}
        renderThumbHorizontal={({ style, ...props }) => (
          <div
            {...props}
            style={{
              opacity: "0",
              display: "none",
              ...horizontalStyle,
            }}
          />
        )}
        onScrollFrame={onScrollFrame}
        onScroll={onScroll}
        onScrollStart={onScrollStart}
        scrollToTop={scrollToTop}
        ref={ref}
      >
        {children}
      </Scrollbars>
    );
  }
);
export default Scroller;
