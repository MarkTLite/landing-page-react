import React from 'react'
import { Cards } from '../../Components/Card/card'
import { CustomText } from '../../Components/CustomText/customText'
import { Footer } from '../../Components/Footer/footer'
import { Header } from '../../Components/Header/header'
import { Section } from '../../Components/Section/section'
import prods from '../../assets/prods.png';
import image1 from '../../assets/Image@1X.png'
import pp1 from '../../assets/pp1.png'
import pp2 from '../../assets/pp2.png'
import form from '../../assets/form.png'
import cardbg2 from '../../assets/cardbg2.png'
import cardbg from '../../assets/cardbg.png'
import section1img from '../../assets/section1img.png'
import o1 from '../../assets/01.png'
import o2 from '../../assets/02.png'
import o3 from '../../assets/03.png'
import o4 from '../../assets/04.png'
import './landingPage.css'
import { CustomButton } from '../../Components/Button/CustomButton'
import buttonbg from '../../assets/buttonbg.png'
import buttonbg1 from '../../assets/buttonbg2.png'
import { FAQ } from '../../Components/FAQ/faq'

/**
* @author
* @function LandingPage
**/

export const LandingPage = (props) => {
    return (
        <div className='landingPage'>
            <Header />
            <Section bgcolor={'#000'} display={'flex'} height={'93vh'} marginTop={'-120px'} id={'home'}>
                <CustomText >
                    <p className='p1' style={{marginTop:'100px'}}>ICE Enterprises Presents</p>
                    <img
                        src={image1}
                        width="386"
                        height="100"
                        className="d-inline-block align-top image1"
                        alt=""
                    />
                    <p className='p2'>Ice Enterprises offers a safe, secure, and frictionless platform that allows OWNERS of ICE Poker Wearables to rent their NFTs to PLAYERS at rates they set on a short-, medium- or long-term basis.</p>
                    <div className='section1-card'>
                    <div className='card1'>
                        <Cards
                            title={'Owner'}
                            text={`I'm looking to rent my wearable.`}
                            width={'100%'}
                            height={'100%'}
                            bgcolor={'#222'}
                            bgimage={buttonbg}
                            txtcolor={'#fff'}                            
                            imageHeight={'100%'}
                            imageWidth={'100%'}
                            style={{marginTop: '-123px'}}
                        ><CustomButton text={'List My Wearable'} />
                        </Cards>
                    </div>
                    <div className='card1'>
                        <Cards
                            title={'Player'}
                            text={`I'm looking to rent my wearable.`}
                            width={'100%'}
                            height={'100%'}
                            bgcolor={'#222'}
                            txtcolor={'#fff'}
                            bgimage={buttonbg1}
                            imageHeight={'100%'}
                            imageWidth={'100%'}
                            style={{marginTop: '-123px'}}
                        ><CustomButton text={'Rent Now'}/>
                        </Cards>
                    </div>
                </div>
                </CustomText>
                <div className='illustration3'>
                    <img
                        src={section1img}
                        height='100%'
                        width='100%'                        
                    />
                    </div>               
                
            </Section>
            <Section bgcolor={'#fff'} id={'howitworks'}>
                <h1>How It works</h1>
                <div className='section2-card'>
                    <Cards
                        title={'Owner Action'}
                        text={`Connect your preferred wallet and list an available wearable for rent. OWNERS are free to set the rental fee (min. 50 ICE per day) and have a variety of rental terms to choose from. A 4% service fee is assessed and deducted automatically from the daily ren`}
                        width={'388px'}
                        image={o1}
                        height={'400px'}
                        flexDirection={'column'}
                        style={{float:'left'}}
                                                                        
                    />
                    <div style={{width:'0.8vw'}}></div>
                    <Cards
                        title={'Player Action'}
                        text={`Scroll through the list of available items and click on the wearable you’d like to rent. Simply connect your wallet to submit payment. A 2% rental fee is added to the total rental cost.`}
                        width={'388px'}
                        height={'400px'}
                        image={o2}
                        flexDirection={'column'}
                        style={{float:'left'}}
                        
                    />
                    <div style={{width:'0.8vw'}}></div>
                    <Cards
                        title={'Secure Escrow Account'}
                        text={`Funds from PLAYERS are held in an escrow account - secured by smart contract - that provides automated prorated payments to OWNERS on a daily basis.`}
                        width={'398px'}
                        height={'400px'}
                        image={o3}
                        flexDirection={'column'}
                        style={{float:'left'}}
                       
                    />
                    <div style={{width:'0.8vw'}}></div>
                    <Cards
                        title={'Notification & Delegation'}
                        text={`OWNERS are notified of rental requests, and have 3 hours to release the rental upon server reset to PLAYERS. If a rental is not assigned within the allotted time frame, all funds are automatically and immediately returned to that PLAYER (including the serv`}
                        width={'398px'}
                        height={'400px'}
                        image={o4}
                        flexDirection={'column'}
                        style={{float:'left'}}
                       
                    />
                </div>
            </Section>
            <Section bgcolor={'#fff'} id={'benefits'}>
                <h1>Benefits</h1>
                <div className='section3-card'>
                    <div className='card1' style={{ height: 'fit-content' }}>
                        <Cards
                            title={'Owner'}
                            width={'100%'}
                            height={'260px'}
                            bgcolor={'#222'}
                            txtcolor={'#fff'}
                            bgimage={cardbg}
                            imageHeight={'100%'}
                            imageWidth={'100%'}
                            style={{marginTop: '-256px'}}                            
                        ><ul style={{width: '60%'}}><li>Generate more ICE per day/wearable while obtaining more consistent returns.</li>
                                <li>Convenience! With automated payments, there is no need to check-in with a renting PLAYER each day.</li>
                                <li>Added ICE utility across the ecosystem.</li></ul>
                            <CustomButton text={'List My Wearable'} />
                        </Cards>
                    </div>
                    <div className='card1' style={{ height: 'fit-content' }}>
                        <Cards
                            title={'Player'}
                            width={'100%'}
                            height={'260px'}
                            bgcolor={'#222'}
                            txtcolor={'#fff'}
                            bgimage={cardbg2}
                            imageHeight={'100%'}
                            imageWidth={'100%'}
                            style={{marginTop: '-256px'}}
                        ><ul style={{width: '60%'}}><li>le wearable for rent.</li>
                                <li>OWNERS are free to set the rental fee (min. 50 ICE per day) and have a variety of rental terms to choose from.</li>
                                <li>A 4% service fee is assessed and deducted automatically from the daily ren</li></ul>
                                <CustomButton text={'Rent Now'}/>
                        </Cards>
                    </div>
                </div>
            </Section>
            <Section bgcolor={'#fff'} id={'faqs'} height={'fit-content'}>
                <h1>FAQs</h1>
                <div className='faq-wrapper' style={{height:'fit-content'}}>
                    <div className='faq-container' style={{height:'fit-content'}}>
                        <FAQ qnsData={
                                [
                                    {qn:'Do my wearables ever leave my wallet?', answer:'No. We serve strictly as an intermediary between OWNERS and PLAYERS looking to broker a rental relationship. Your wearables never leave your wallet.' },
                                    {qn:'What are the fees for using the service?', answer:'' },
                                    {qn:'Can I track how much of the rental payment has been released and how much longer a rental is scheduled to last?', answer:'' },
                                    {qn:'ICE Poker already has built-in splits for an OWNER to earn ICE when delegating their wearables. Why do I have to pay again?', answer:'' },
                                    {qn:'How safe is this platform? How do I know that if I pay the entire rental and service fees upfront I’ll have access to the wearable that I requested?', answer:'' },
                                    {qn:'How do I know that the OWNER really owns the wearable they are offering?', answer:'' },
                                    {qn:'What happens if an OWNER forgets to delegate or (undelegates) after confirming a rental?', answer:'' }

                                ]
                            }
                            />
                    </div>
                    {/* <div className='form-container'><CustomForm></CustomForm></div> */}
                    <div className='form-container'>
                        <img
                            src={form}
                            height='120%'
                            width='70%'
                            />
                            </div>
                </div>
            </Section>
            <Section bgcolor={'#000'} txtcolor={'#fff'} id={'team'}>
                <h1 style={{ textAlign: 'center', paddingTop:'20px' }}>Our Team</h1>
                <div className='section5-card'>
                    <Cards
                        width={'20rem'}
                        image={pp1}
                        imageHeight={'300px'}
                        imageWidth={'111%'}
                        height={'500px'}
                        flexDirection={'column'}                     
                        bgcolor={'#333'}
                        style={{marginTop:'-15px',marginLeft:'-15px',marginRight:'-5px'}}                        
                    >
                        <div className='team-div-names'>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Matt</p>
                            <p style={{ color: '#40A9FF', fontSize: '10px', marginLeft: '200px',fontWeight: '900', }}>Co-Founder</p>
                        </div>
                        <div className='team-div-det'>
                            <p style={{ color: '#8C8C8C', fontSize: '10px', }}>Discord : Howard0x</p>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Background</p>
                            <p style={{ color: '#8C8C8C', fontSize: '10px',marginTop:'-20px' }}>MGMT Consulting (Big4/Boutique)</p>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Specialities</p>
                            <p style={{ color: '#8C8C8C', fontSize: '10px',marginTop:'-20px' }}>Blockchain/Crypto, FinTech/DeFi, Marketing</p>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Side-Hustle + Fun Fact</p>
                            <p style={{ color: '#8C8C8C', fontSize: '10px',marginTop:'-20px' }}>Side-Hustle + Fun Fact</p>

                        </div>
                    </Cards>
                    <div style={{width:'1vw'}}> </div>     
                    <Cards
                        width={'20rem'}
                        image={pp2}
                        imageHeight={'300px'}
                        imageWidth={'111%'}
                        height={'500px'}
                        flexDirection={'column'}                     
                        bgcolor={'#333'}
                        style={{marginTop:'-15px',marginLeft:'-15px',marginRight:'-5px'}}                        
                    >
                        <div className='team-div-names'>
                            <p style={{ fontWeight: '900', fontSize: '10px' }}>Steven</p>
                            <p style={{ color: '#40A9FF', fontSize: '10px', marginLeft: '190px',fontWeight: '900', }}>Co-Founder</p>
                        </div>
                        <div className='team-div-det'>
                            <p style={{ color: '#8C8C8C', fontSize: '10px', }}>Discord : BlackKnight84</p>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Background</p>
                            <p style={{ color: '#8C8C8C', fontSize: '10px',marginTop:'-20px' }}>Lawyer</p>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Specialities</p>
                            <p style={{ color: '#8C8C8C', fontSize: '10px',marginTop:'-20px' }}>Internet, Media and Telecom Policy</p>
                            <p style={{ fontWeight: '600', fontSize: '10px' }}>Side-Hustle + Fun Fact</p>
                            <p style={{ color: '#8C8C8C', fontSize: '10px',marginTop:'-20px' }}>COO Tech Startup + Finished 30 Marathons</p>

                        </div>
                    </Cards>
                </div></Section>
            <Section bgcolor={'#fff'} id={'ourstory'}>
                <h1>Our Story</h1>
                <div className='section6-card'>
                    <div className='section6-text' >
                        <p><text style={{color:'#40A9FF'}}>Our team minted two genesis ICE Suit wearables in October 2021</text>, and we continue adding to our portfolio whenever possible. We have been amazed to see the phenomenal growth and development of ICE Poker in such a short time. We have also followed with great interest how the growing user base coupled with pent up demand has led to the development of an ad hoc rental market.</p>

                        <p>This rental market, however, has not yet been optimized. There is no easy way to effectuate these transactions, and <text style={{color:'#40A9FF'}}>complaints of fraud and abuse are rampant on Discord.</text> Players have no certainty that parties representing themselves as Owners really have the wearables. What happens if an OWNER forgets to delegate or (undelegates) after confirming a rental? they are offering; have no recourse should they send a rental fee in advance to a bad actor; and not surprisingly are hesitant to commit funds on more than a day-to-day basis.</p>

                        <p>The current system is not ideal for Owners either. <text style={{color:'#40A9FF'}}>While Owners would welcome the extra revenue a rental would provide, there is no convenient way to list wearables and find Players</text>. And even if a medium- or longer-term rental is agreed upon, because Players are rightfully reluctant to forward a long-term rental fee, Owners need to keep track of on a daily basis to ensure payments have been made.</p>

                        <p>As our portfolio of wearables grew, we faced these problems every day. That is why we set out to design a system that eased our own administrative burden. But for it to work, <text style={{color:'#40A9FF'}}>we knew that Players must have confidence to rent knowing that the wearable is as advertised</text>; their rental fee would be secure; and they’d have recourse to get the fee back if they were undelaged or something went awry.</p>

                        <p>After successfully accomplishing these objectives, we quickly realized that our solution would benefit everyone in the community. And thus, the Ice Enterprises’ Rent-2-Play platform was born. <text style={{color:'#40A9FF'}}>We hope that you enjoy this service and look forward to growing alongside Decentral Games, ICE Poker, and the amazing team and community</text> behind this disruptive P2E opportunity.</p>
                    </div>
                    
                    <div className='section6-products'>
                        <img
                        src={prods}
                        width='95%'
                        height='95%'                                    
                        />
                    {/* <div className='section6-back-outline'></div>
                        <div className='section6-back-card'></div>
                        <div className='section6-front-card'>
                        <div className='section6-front-card-row1'>
                        <Cards
                        title={'Owner Action'}
                        width={'180px'}
                        image={Logo}
                        height={'32vh'}
                        flexDirection={'column'}
                    />
                    <Cards
                        title={'Owner Action'}
                        width={'180px'}
                        image={Logo}
                        height={'32vh'}
                        flexDirection={'column'}

                    />
                    </div>
                    <div className='section6-front-card-row2'>
                    <Cards
                        title={'Owner Action'}
                        width={'180px'}
                        image={Logo}
                        height={'32vh'}
                        flexDirection={'column'}
                    />
                    <Cards
                        title={'Owner Action'}
                        width={'180px'}
                        image={Logo}
                        height={'32vh'}
                        flexDirection={'column'}

                    />
                    </div>
                        </div>*/}
                    </div> 
                </div>
                </Section>
            <Footer />
        </div >

    )

} 