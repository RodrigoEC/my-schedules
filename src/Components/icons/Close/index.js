import { useTheme } from "../../../context/theme";
import { Wrapper } from "./styles";

export const Close = (props) => {
  const { theme } = useTheme();
  
  return (
    <Wrapper {...props}>
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.0607 0.646472C1.86544 0.451209 1.54886 0.451205 1.35359 0.646468C1.15833 0.84173 1.15833 1.15831 1.35359 1.35357L5.99998 6.00002L1.3535 10.6464C1.15823 10.8417 1.15823 11.1583 1.35349 11.3536C1.54875 11.5488 1.86534 11.5488 2.0606 11.3536L6.70708 6.70713L11.3032 11.3033C11.4985 11.4986 11.8151 11.4986 12.0103 11.3033C12.2056 11.1081 12.2056 10.7915 12.0103 10.5962L7.41419 6.00003L12.0105 1.4038C12.2057 1.20854 12.2057 0.891956 12.0105 0.696693C11.8152 0.501429 11.4986 0.501428 11.3034 0.696689L6.70709 5.29291L2.0607 0.646472Z"
          fill={theme.secondary}
        />
        <path
          d="M2.0607 0.646472L1.70714 1.00002L1.70714 1.00002L2.0607 0.646472ZM1.35359 1.35357L1.70714 1.00002L1.70714 1.00002L1.35359 1.35357ZM5.99998 6.00002L6.35353 6.35357L6.70709 6.00002L6.35353 5.64647L5.99998 6.00002ZM1.3535 10.6464L0.999945 10.2929L0.999945 10.2929L1.3535 10.6464ZM1.35349 11.3536L1.70705 11L1.70705 11L1.35349 11.3536ZM2.0606 11.3536L1.70705 11L1.70705 11L2.0606 11.3536ZM6.70708 6.70713L7.06064 6.35358L6.70709 6.00002L6.35353 6.35357L6.70708 6.70713ZM11.3032 11.3033L10.9497 11.6569L10.9497 11.6569L11.3032 11.3033ZM12.0103 10.5962L12.3639 10.2427L12.3639 10.2427L12.0103 10.5962ZM7.41419 6.00003L7.06064 5.64647L6.70709 6.00002L7.06064 6.35358L7.41419 6.00003ZM12.0105 1.4038L11.6569 1.05024L11.6569 1.05024L12.0105 1.4038ZM12.0105 0.696693L12.364 0.343142L12.0105 0.696693ZM11.3034 0.696689L11.6569 1.05024L11.6569 1.05024L11.3034 0.696689ZM6.70709 5.29291L6.35353 5.64647L6.70709 6.00002L7.06064 5.64647L6.70709 5.29291ZM1.70715 1.00002L1.70714 1.00002L2.41426 0.292921C2.02374 -0.0976045 1.39057 -0.0976136 1.00004 0.292915L1.70715 1.00002ZM1.70714 1.00002L1.70715 1.00002L1.00004 0.292915C0.609519 0.683435 0.60951 1.3166 1.00003 1.70713L1.70714 1.00002ZM6.35353 5.64647L1.70714 1.00002L1.00003 1.70713L5.64642 6.35357L6.35353 5.64647ZM1.70705 11L6.35353 6.35357L5.64643 5.64646L0.999945 10.2929L1.70705 11ZM1.70705 11L1.70705 11L0.999945 10.2929C0.609419 10.6834 0.609414 11.3166 0.999937 11.7071L1.70705 11ZM1.70705 11L1.70705 11L0.999937 11.7071C1.39046 12.0976 2.02362 12.0976 2.41415 11.7071L1.70705 11ZM6.35353 6.35357L1.70705 11L2.41415 11.7071L7.06063 7.06068L6.35353 6.35357ZM11.6568 10.9498L7.06064 6.35358L6.35353 7.06068L10.9497 11.6569L11.6568 10.9498ZM11.6568 10.9498L11.6568 10.9498L10.9497 11.6569C11.3402 12.0474 11.9733 12.0474 12.3639 11.6569L11.6568 10.9498ZM11.6568 10.9498L11.6568 10.9498L12.3639 11.6569C12.7544 11.2663 12.7544 10.6332 12.3639 10.2427L11.6568 10.9498ZM7.06064 6.35358L11.6568 10.9498L12.3639 10.2427L7.76775 5.64647L7.06064 6.35358ZM11.6569 1.05024L7.06064 5.64647L7.76774 6.35358L12.364 1.75736L11.6569 1.05024ZM11.6569 1.05024L11.6569 1.05024L12.364 1.75736C12.7545 1.36683 12.7546 0.733668 12.364 0.343142L11.6569 1.05024ZM11.6569 1.05024L11.6569 1.05024L12.364 0.343142C11.9735 -0.047386 11.3403 -0.0473882 10.9498 0.343134L11.6569 1.05024ZM7.06064 5.64647L11.6569 1.05024L10.9498 0.343133L6.35354 4.93936L7.06064 5.64647ZM1.70714 1.00002L6.35353 5.64647L7.06065 4.93936L2.41426 0.292921L1.70714 1.00002Z"
          fill={theme.secondary}
        />
      </svg>
    </Wrapper>
  );
};