import { Box, Skeleton, Stack, Typography } from "@mui/material";

const ItemListSkeleton = () => {
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Skeleton
          variant="text"
          animation="wave"
          sx={{
            fontSize: "4rem",
            marginTop: "10px",
            width: { xs: "310px", md: "500px" },
          }}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        width={1 / 1}
        alignItems={"center"}
      >
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
          {skeletonArray.map((element) => {
            return (
              <Box spacing={1} width={345} key={element}>
                <Skeleton
                  variant="rounded"
                  animation="wave"
                  width={345}
                  height={140}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "2rem" }}
                />
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{ fontSize: "1rem" }}
                />
                <Skeleton
                  variant="rectangular"
                  animation="wave"
                  width={140}
                  height={60}
                />
              </Box>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default ItemListSkeleton;
