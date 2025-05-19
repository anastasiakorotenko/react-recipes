'use client'
import { useState, useEffect } from "react";
import { getAllCategories } from "./lib/api";
import { Preloader } from "@/components/ui/Preloader";
import { CategoryList } from "../components/category/CategoryList";

export default function Home() {
  const [catalog, setCatalog] = useState([])

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories)
    })
  },[])

  return (
    <>
      {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog}/>}
    </>
  );
}