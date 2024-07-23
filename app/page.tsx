'use client'
import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import React from "react";
import axios from "axios";

interface HomeProps {
  searchParams: IListingsParams
}

  const Home = ({ searchParams }: HomeProps) => {
 
  const [listings, setListings] = React.useState([]);
  // const currentUser = await getCurrentUser();
  const [loading, setLoading]  = React.useState(false)


  const currentUser = {};

  
  const testing = async () => {
    setLoading(true)
    console.log(searchParams)
    try {
      const data = await axios.patch('/api/listings', searchParams)
    setListings(data.data.safeListings)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }
  React.useEffect(() => {
 
  testing()

   
  }, [searchParams])


  if(loading){
    return <div>loading data...</div>
  }

  if (listings.length == 0 && loading === false) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    )
  }



  return (
  <ClientOnly>
    <Container>
      <div className="
      pt-24
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      2xl:grid-cols-6
      gap-8
      ">
          {
          // @ts-ignore
          listings.map((listing) => {
            return (
              <ListingCard
              // @ts-ignore
              currentUser={currentUser}
                // @ts-ignore
              key={listing.id}
              data={listing}
              />
            )
          })}
      </div>
    </Container>
  </ClientOnly>
  );
}

export default Home;
