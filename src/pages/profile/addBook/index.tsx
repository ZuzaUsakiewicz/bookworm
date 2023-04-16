import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Container,
  TextField,
  Switch,
  FormGroup,
  FormControlLabel,
  Button,
  Card,
} from "@mui/material";
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import Link from "next/link";

export default function AddBook() {
  const [isRead, setIsRead] = useState(true);
  const [genre, setGenre] = useState("fantasy");

  const handleRead = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRead(event.target.checked);
  };

  const changeGenre = (event: SelectChangeEvent) => {
    setGenre(event.target.value as string);
  };

  const initialState = {
    author: "",
    title: "",
    genre: "",
    pages: "",
    isread: false,
  };

  return (
    <Container
      fixed
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ position: "absolute", top: "1rem", right: "0rem" }}>
        <Link href="/profile">Go back</Link>
        <Button variant="contained" color="error" sx={{ marginLeft: "1rem" }}>
          Cancel
        </Button>
      </Container>

      <Card
        elevation={3}
        sx={{
          maxWidth: 300,
          padding: "1rem",
        }}
      >
        <FormGroup
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl
            fullWidth
            sx={{
              padding: "1rem",
            }}
          >
            <TextField id="author-input" label="Author" variant="outlined" />
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              padding: "1rem",
            }}
          >
            <TextField id="title-input" label="Title" variant="outlined" />
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              padding: "1rem",
            }}
          >
            <TextField id="pages-input" label="Pages" variant="outlined" />
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              padding: "1rem",
            }}
          >
            <InputLabel id="genre-select-label">Genre</InputLabel>
            <Select
              labelId="genre-select-label"
              id="genre-select-label"
              variant="outlined"
              value={genre}
              label="Genre"
              onChange={changeGenre}
            >
              <MenuItem value={"fantasy"}>Fantasy</MenuItem>
              <MenuItem value={"thriller"}>Thriller</MenuItem>
              <MenuItem value={"classic"}>Classic</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel
            value={initialState.isread ? true : false}
            label={initialState.isread ? "read" : "not read"}
            labelPlacement="start"
            control={
              <Switch color="success" checked={isRead} onChange={handleRead} />
            }
          />
          <Button variant="contained" color="secondary">
            Add Book
          </Button>
        </FormGroup>
      </Card>
    </Container>
  );
}
