import { useColorModeValue } from "@chakra-ui/react";

const Icon = () => {
  const iconColor = useColorModeValue("slate.900", "slate.50"); // Dark mode and light mode colors

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 122.88 122.88"
        style={{ width: "10vh" }}
        fill={iconColor} // Dynamically set the color
      >
        <path d="M62.43,122.88h-1.98c0-16.15-6.04-30.27-18.11-42.34C30.27,68.47,16.16,62.43,0,62.43v-1.98 c16.16,0,30.27-6.04,42.34-18.14C54.41,30.21,60.45,16.1,60.45,0h1.98c0,16.15,6.04,30.27,18.11,42.34 c12.07,12.07,26.18,18.11,42.34,18.11v1.98c-16.15,0-30.27,6.04-42.34,18.11C68.47,92.61,62.43,106.72,62.43,122.88L62.43,122.88z" />
      </svg>
    </>
  );
};

export default Icon;
