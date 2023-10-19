
import "./../helper/Icons.scss";


export const checkedIcon = (onClick) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512.001 512.001"
      style={{
        enableBackground: "new 0 0 512.001 512.001",
      }}
      xmlSpace="preserve"
      className="success_icon"
      onClick={onClick}
    >
      <path
        style={{
          fill: "#00FF22",
        }}
        d="M256.001,24c-128.13,0-232,103.87-232,232s103.87,232,232,232S488,384.13,488,256.001 S384.13,24,256.001,24z"
        onClick={onClick}
      />
      <polygon
        style={{
          fill: "#FFFFFF",
        }}
        points="345.032,137.848 216.896,295.888 163.04,242.728 127.528,281.848 221.056,374.153  384.472,172.608 "
        onClick={onClick}
      />
    </svg>
  );
  
  export const cancelIcon = (onClick) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512.001 512.001"
      style={{
        enableBackground: "new 0 0 512.001 512.001",
      }}
      xmlSpace="preserve"
      className="warning_icon"
      onClick={onClick}
    >
      <path
        onClick={onClick}
        style={{
          fill: "#FF6465",
        }}
        d="M256.001,512c141.384,0,255.999-114.615,255.999-256.001C512.001,114.615,397.386,0,256.001,0 S0.001,114.615,0.001,256.001S114.616,512,256.001,512z"
      />
      <path
        onClick={onClick}
        style={{
          opacity: 0.1,
          enableBackground: "new",
        }}
        d="M68.873,256.001c0-129.706,96.466-236.866,221.564-253.688 C279.172,0.798,267.681,0,256.001,0C114.616,0,0.001,114.615,0.001,256.001S114.616,512.001,256,512.001 c11.68,0,23.171-0.798,34.436-2.313C165.339,492.865,68.873,385.705,68.873,256.001z"
      />
      <path
        onClick={onClick}
        style={{
          fill: "#FFFFFF",
        }}
        d="M313.391,256.001l67.398-67.398c4.899-4.899,4.899-12.842,0-17.74l-39.65-39.65 c-4.899-4.899-12.842-4.899-17.74,0l-67.398,67.398l-67.398-67.398c-4.899-4.899-12.842-4.899-17.74,0l-39.65,39.65 c-4.899,4.899-4.899,12.842,0,17.74l67.398,67.398l-67.398,67.398c-4.899,4.899-4.899,12.842,0,17.741l39.65,39.65 c4.899,4.899,12.842,4.899,17.74,0l67.398-67.398L323.4,380.79c4.899,4.899,12.842,4.899,17.74,0l39.65-39.65 c4.899-4.899,4.899-12.842,0-17.741L313.391,256.001z"
      />
    </svg>
  );

  export const modalSuccessIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="107"
      height="107"
      viewBox="0 0 107 107"
      className="modalSuccessIcon"
    >
      <defs>
        <linearGradient
          id="modal-success-gradient"
          x1="0.171"
          y1="-0.104"
          x2="0.915"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#078d7f" />
          <stop offset="1" stopColor="#037065" />
        </linearGradient>
        <filter
          id="Ellipse_18437"
          x="0"
          y="0"
          width="107"
          height="107"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="5.5" result="blur" />
          <feFlood floodColor="#605f5f" floodOpacity="0.349" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_14554"
        data-name="Group 14554"
        transform="translate(-24081.5 -131.5)"
      >
        <g id="Group_14552" data-name="Group 14552">
          <g
            transform="matrix(1, 0, 0, 1, 24081.5, 131.5)"
            filter="url(#Ellipse_18437)"
          >
            <circle
              id="Ellipse_18437-2"
              data-name="Ellipse 18437"
              cx="37"
              cy="37"
              r="37"
              transform="translate(16.5 14.5)"
              fill="url(#modal-success-gradient)"
            />
          </g>
          <path
            id="svgviewer-output_1_"
            data-name="svgviewer-output (1)"
            d="M40.412,6.449a1.626,1.626,0,0,1,0,2.17L17.749,33.171a1.341,1.341,0,0,1-2,0L4.415,20.9a1.626,1.626,0,0,1,0-2.17,1.341,1.341,0,0,1,2,0l10.33,11.191L38.409,6.449A1.341,1.341,0,0,1,40.412,6.449Z"
            transform="translate(24112.932 163.237)"
            fill="#fff"
            fillRule="evenodd"
          />
        </g>
      </g>
    </svg>
  );
  
  export const modalErrorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="74px"
      height="74px"
      viewBox="0 0 107 107"
      className="modalSuccessIcon"
    >
      <defs>
        <linearGradient
          id="error-icon-gradient"
          x1="0.171"
          y1="-0.104"
          x2="0.915"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stopColor="#cc2b2f" />
          <stop offset="1" stopColor="#b61115" />
        </linearGradient>
        <filter
          id="Ellipse_18437"
          x="0"
          y="0"
          width="107"
          height="107"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="5.5" result="blur" />
          <feFlood floodColor="#605f5f" floodOpacity="0.349" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g
        id="Group_14561"
        data-name="Group 14561"
        transform="translate(-727.5 -110.5)"
      >
        <g
          id="Group_14554"
          data-name="Group 14554"
          transform="translate(-23354 -21)"
        >
          <g id="Group_14552" data-name="Group 14552">
            <g
              transform="matrix(1, 0, 0, 1, 24081.5, 131.5)"
              filter="url(#Ellipse_18437)"
            >
              <circle
                id="Ellipse_18437-2"
                data-name="Ellipse 18437"
                cx="37"
                cy="37"
                r="37"
                transform="translate(16.5 14.5)"
                fill="url(#error-icon-gradient)"
              />
            </g>
          </g>
        </g>
        <path
          id="dangerous_FILL0_wght400_GRAD0_opsz48"
          d="M30.913,34.91l9.8,9.8a2.583,2.583,0,0,0,1.9.761,2.827,2.827,0,0,0,2-4.854L34.91,30.913l9.8-9.8a2.583,2.583,0,0,0,.761-1.9,2.827,2.827,0,0,0-4.854-2l-9.709,9.709-9.8-9.8a2.583,2.583,0,0,0-1.9-.761,2.827,2.827,0,0,0-2,4.854l9.709,9.709-9.8,9.8a2.583,2.583,0,0,0-.761,1.9,2.827,2.827,0,0,0,4.854,2ZM30.913,30.913Z"
          transform="translate(749.65 130.65)"
          fill="#fff"
        />
      </g>
    </svg>
  );
  export const warningIcon = (onClick) => (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="796 698.08 200 200"
      enableBackground="new 796 698.08 200 200"
      xmlSpace="preserve"
      className="modal_icon"
      onClick={onClick}
    >
      <path
        d="M994.47,869.072L905.896,715.66c-2.041-3.535-5.813-5.713-9.896-5.713c-4.083,0-7.854,2.178-9.896,5.713l-88.573,153.412 c-2.041,3.536-2.041,7.892,0,11.427c2.041,3.536,5.813,5.714,9.896,5.714h177.147c4.083,0,7.854-2.178,9.896-5.714 C996.511,876.963,996.511,872.608,994.47,869.072z M896,870.253c-7.22,0-13.072-5.852-13.072-13.071 c0-7.221,5.852-13.072,13.072-13.072c7.221,0,13.072,5.852,13.072,13.072C909.072,864.402,903.221,870.253,896,870.253z  M910.58,765.235l-7.793,62.267c-0.469,3.748-3.889,6.407-7.637,5.938c-3.168-0.396-5.557-2.908-5.938-5.938l-7.793-62.267 c-1.007-8.053,4.703-15.397,12.755-16.405c8.053-1.007,15.397,4.703,16.405,12.756C910.732,762.8,910.719,764.072,910.58,765.235z"
        fill="red"
        onClick={onClick}
      />
    </svg>
  );
  export const CloseIcon = (props) => (
    <svg
      width="0.93vw"
      height="0.93vw"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className="closeIcon"
      {...props}
    >
      <path
        fill="#000"
        d="M17.558 15.44a1.49 1.49 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L9 11.12l-6.438 6.44a1.5 1.5 0 0 1-2.12 0 1.49 1.49 0 0 1 0-2.12L6.88 9 .442 2.563a1.5 1.5 0 0 1 2.12-2.12L9 6.883l6.438-6.44a1.5 1.5 0 0 1 2.12 2.12L11.12 9z"
      />
    </svg>
  );