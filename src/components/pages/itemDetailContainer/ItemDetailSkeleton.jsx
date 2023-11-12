import { Box, Skeleton, Stack } from "@mui/material";

const ItemDetailSkeleton = () => {
  return (
    <>
      <Stack
        spacing={1}
        width={1 / 1}
        gap={4}
        p={4}
        display={"flex"}
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
      >
        <Box spacing={1} width={345}>
          <Skeleton
            variant="rounded"
            animation="wave"
            width={345}
            height={140}
          />
          <Skeleton variant="text" animation="wave" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" animation="wave" sx={{ fontSize: "1rem" }} />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={140}
            height={60}
          />
        </Box>
      </Stack>
    </>
  );
};

export default ItemDetailSkeleton;
